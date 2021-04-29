import { completedTask, isTaskSelected } from "./stats.js";

window.addEventListener("DOMContentLoaded", () => {
  loadSettings();
  minuteChange();
  secondChange();
});

let secondsPerPomo = 60 * 25; // Number of seconds in single pomo session
let currentTime = secondsPerPomo; // Time set after breaks or pomo sessions
let timeRemaining = secondsPerPomo; // Time remaining in session in seconds
let pomodoro = 0; // Number of pomodoros completed
let intervalId = null; // ID of interval calling the timeAdvance method
let onBreak = false;

/**
 * This function advances time by one second. It will be called on a one second interval while the timer is running.
 */
export function timeAdvance() {
  --timeRemaining;
  let minute = Math.floor(timeRemaining / 60);
  let seconds = Math.floor(timeRemaining % 60);
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("seconds").innerHTML = seconds;
  updateCircle(timeRemaining, currentTime);

  /*
   * Break handling
   */
  if (timeRemaining <= 0) {
    // If a break just completed
    document.getElementById("mixBut").style.background = "#bd0000";
    document.getElementById("mixBut").removeAttribute("disabled");

    if (onBreak) {
      onBreak = false;
      document.getElementById("current-task").innerHTML = "Current Task: None";

      clearInterval(intervalId);
      intervalId = null;
      timeRemaining = secondsPerPomo;
      currentTime = secondsPerPomo;
      sound();
    }
    // If a pomo session just completed
    else {
      completedTask();
      document.getElementById("current-task").innerHTML =
        "Current Task: On Break!";
      onBreak = true;
      ++pomodoro;
      document.getElementById("completePomos").innerHTML =
        "Completed Pomodoros: " +
        (parseInt(window.localStorage.getItem("totalPomo")) + 1);

      // store total pomo in local storage
      window.localStorage.setItem(
        "totalPomo",
        parseInt(window.localStorage.getItem("totalPomo")) + 1
      );

      clearInterval(intervalId);
      intervalId = null;
      sound();

      let pomosUntilLongBreak = document.getElementById("userPomos").value;

      if (!pomosUntilLongBreak) {
        pomosUntilLongBreak = 4;
      }

      // If it is time for a long break
      if (pomodoro % pomosUntilLongBreak == 0 && pomodoro != 0) {
        const minutesPerLongBreak = document.getElementById("breakPomos").value;
        if (minutesPerLongBreak == "") {
          // default value: 30 mins
          timeRemaining = 60 * 30;
          currentTime = 60 * 30;
        } else {
          timeRemaining = 60 * minutesPerLongBreak;
          currentTime = 60 * minutesPerLongBreak;
        }
      }
      // If it is time for a short break
      else {
        const minutesPerShortBreak = document.getElementById("shortBreakPomos")
          .value;
        if (minutesPerShortBreak == "") {
          // default value: 5 mins
          timeRemaining = 60 * 5;
          currentTime = 60 * 5;
        } else {
          timeRemaining = 60 * minutesPerShortBreak;
          currentTime = 60 * minutesPerShortBreak;
        }
      }
    }
  }
}

/*
 * startButton and stopButton will be called by the start/stop button
 * The single button will swap between the two functions each time one is called
 */
const mixBut = document.getElementById("mixBut");

/**
 * This function implements the functionality of the start button. It sets the timer back to the full time, starts calling timeAdvance on an interval of one second,
 * and transforms the start button into a stop button by changing its color, text, and associated function (startButton() -> stopButton()).
 */
export function startButton() {
  if (onBreak || isTaskSelected()) {
    if (secondsPerPomo == 0) {
      // defaults back to 25 mins if both mins and secs 0
      timeRemaining = 60 * 25;
    }
    mixBut.setAttribute("disabled", "");
    intervalId = setInterval(timeAdvance, 1000);
    mixBut.removeEventListener("click", startButton);
    mixBut.addEventListener("click", stopButton);
    document.getElementById("mixBut").style.background = "gray";
    mixBut.value = "STOP";
  }
}
/**
 * This function implements the functionality of the stop button. It stops calling timeAdvance every second, and transforms the stop button into a start button
 * by changing its color, text, and associated function (stopButton() -> startButton()).
 */
export function stopButton() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  mixBut.removeEventListener("click", stopButton);
  mixBut.addEventListener("click", startButton);
  mixBut.removeAttribute("disabled");
  document.getElementById("mixBut").style.background = "#ff671d";
  updateCircle(timeRemaining, currentTime);

  // Updating the time display given that a new time remaining will have been set for a break
  let minute = Math.floor(timeRemaining / 60);
  let seconds = Math.floor(timeRemaining % 60);
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("seconds").innerHTML = seconds;
  mixBut.value = "START";
}
mixBut.addEventListener("click", startButton);

/**
 * resetButton is called by the reset button on the page. This button resets how much time is left on the timer to a non break amount.
 */
export function resetButton() {
  if (onBreak) {
    onBreak = false;
    document.getElementById("current-task").innerHTML = "Current Task: None";
  }
  timeRemaining = secondsPerPomo;
  currentTime = secondsPerPomo;

  let minute = Math.floor(timeRemaining / 60);
  let seconds = Math.floor(timeRemaining % 60);
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("seconds").innerHTML = seconds;
  updateCircle(timeRemaining, currentTime);
  stopButton();
}
document.getElementById("reset-btn").addEventListener("click", resetButton);

/**
 * resetPomo is for use by Jest to reset the number of pomos completed
 */
export function resetPomos() {
  pomodoro = 0;
  onBreak = false;
}

/**
 * canChangeTask is for use by stats.js to determine whether now is an appropriate time to change what task the user is working on
 */
export function canChangeTask() {
  return !onBreak && intervalId == null;
}

/*
 * Settings Modal
 */

// Local Storage
function saveSettings() {
  window.localStorage._shortBreakPomos = String(
    document.getElementById("shortBreakPomos").value
  );
  window.localStorage._userPomos = String(
    document.getElementById("userPomos").value
  );
  window.localStorage._breakPomos = String(
    document.getElementById("breakPomos").value
  );
  window.localStorage._userMins = String(
    document.getElementById("userMins").value
  );
  window.localStorage._userSecs = String(
    document.getElementById("userSecs").value
  );
  window.localStorage._changeSelect = document.getElementById(
    "changeSelect"
  ).value;
  window.localStorage._volume_number = String(
    document.getElementById("volume-number").value
  );
  window.localStorage._volume_slider = String(
    document.getElementById("volume-slider").value
  );
}

function loadSettings() {
  document.getElementById("shortBreakPomos").value =
    window.localStorage._shortBreakPomos;
  document.getElementById("userPomos").value = window.localStorage._userPomos;
  document.getElementById("breakPomos").value = window.localStorage._breakPomos;
  document.getElementById("userMins").value = window.localStorage._userMins;
  document.getElementById("userSecs").value = window.localStorage._userSecs;
  document.getElementById("changeSelect").value =
    window.localStorage._changeSelect;
  document.getElementById("volume-number").value =
    window.localStorage._volume_number;
  document.getElementById("volume-slider").value =
    window.localStorage._volume_slider;

  window.localStorage.setItem(
    "shortBreakPomos",
    document.getElementById("shortBreakPomos").value
  );
  window.localStorage.setItem(
    "userPomos",
    document.getElementById("userPomos").value
  );
  window.localStorage.setItem(
    "breakPomos",
    document.getElementById("breakPomos").value
  );
  window.localStorage.setItem(
    "userMins",
    document.getElementById("userMins").value
  );
  window.localStorage.setItem(
    "userSecs",
    document.getElementById("userSecs").value
  );
  window.localStorage.setItem(
    "changeSelect",
    document.getElementById("changeSelect").value
  );
  window.localStorage.setItem(
    "volume-number",
    document.getElementById("volume-number").value
  );
  window.localStorage.setItem(
    "volume-slider",
    document.getElementById("volume-slider").value
  );

  document.getElementById(
    "shortBreakPomos"
  ).value = window.localStorage.getItem("shortBreakPomos");
  document.getElementById("userPomos").value = window.localStorage.getItem(
    "userPomos"
  );
  document.getElementById("breakPomos").value = window.localStorage.getItem(
    "breakPomos"
  );
  document.getElementById("userMins").value = window.localStorage.getItem(
    "userMins"
  );
  document.getElementById("userSecs").value = window.localStorage.getItem(
    "userSecs"
  );
  document.getElementById("changeSelect").value = window.localStorage.getItem(
    "changeSelect"
  );
  document.getElementById("volume-number").value = window.localStorage.getItem(
    "volume-number"
  );
  document.getElementById("volume-slider").value = window.localStorage.getItem(
    "volume-slider"
  );
}

// When the user clicks anywhere outside of the modal, close it
const modal = document.getElementById("settings-modal");
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    loadSettings();
    resetButton();
    minuteChange();
    secondChange();
  }
};

const inputMins = document.getElementById("userMins");
const inputSecs = document.getElementById("userSecs");
/**
 * Updating the timer when the userMins element in the settings menu changes.
 * Prevents leading zeroes in the input field.
 */
export function minuteChange() {
  stopButton(); // so that there's no overlapping timers
  let indexMins = 0;
  // doesnt allow for custom timer to start with a 0 and more numbers
  if (inputMins.value.length > 1) {
    while (inputMins.value.substring(indexMins, indexMins + 1) == "0") {
      indexMins++;
    }
  }
  inputMins.value = inputMins.value.substring(indexMins);
  if (inputMins.value == "") {
    document.getElementById("minute").innerHTML = "25";
    secondsPerPomo = 60 * 25 + Number(inputSecs.value);
    currentTime = secondsPerPomo;
  } else if (inputMins.value == "0") {
    document.getElementById("minute").innerHTML = "00";
    secondsPerPomo = Number(inputSecs.value);
    currentTime = secondsPerPomo;
  } else if (inputMins.value < 10) {
    document.getElementById("minute").innerHTML = "0" + inputMins.value;
    secondsPerPomo = 60 * Number(inputMins.value) + Number(inputSecs.value);
    currentTime = secondsPerPomo;
  } else {
    document.getElementById("minute").innerHTML = inputMins.value;
    secondsPerPomo = 60 * Number(inputMins.value) + Number(inputSecs.value);
    currentTime = secondsPerPomo;
  }
  timeRemaining = secondsPerPomo;
  updateCircle(timeRemaining, secondsPerPomo);
  intervalId = null;
}
inputMins.oninput = minuteChange;

/**
 * Updating timer when the userSecs element in the settings menu changes.
 * Prevents leading zeroes in the input field.
 */
export function secondChange() {
  stopButton(); // so that there's no overlapping timers
  let indexSecs = 0;
  // doesnt allow for custom timer to start with a 0 and more numbers
  if (inputSecs.value.length > 1) {
    while (inputSecs.value.substring(indexSecs, indexSecs + 1) === "0") {
      indexSecs++;
    }
  }
  inputSecs.value = inputSecs.value.substring(indexSecs);
  if (inputSecs.value === "" || inputSecs.value === "0") {
    document.getElementById("seconds").innerHTML = "00";
    if (inputMins.value == "") {
      document.getElementById("minute").innerHTML = "25";
      secondsPerPomo = 60 * 25 + Number(inputSecs.value);
      currentTime = secondsPerPomo;
    } else {
      secondsPerPomo = 60 * Number(inputMins.value);
      currentTime = secondsPerPomo;
    }
  } else if (inputSecs.value < 10) {
    document.getElementById("seconds").innerHTML = "0" + inputSecs.value;
    if (inputMins.value == "") {
      document.getElementById("minute").innerHTML = "25";
      secondsPerPomo = 60 * 25 + Number(inputSecs.value);
      currentTime = secondsPerPomo;
    } else {
      secondsPerPomo = 60 * Number(inputMins.value) + Number(inputSecs.value);
      currentTime = secondsPerPomo;
    }
  } else {
    document.getElementById("seconds").innerHTML = inputSecs.value;
    if (inputMins.value == "") {
      document.getElementById("minute").innerHTML = "25";
      secondsPerPomo = 60 * 25 + Number(inputSecs.value);
      currentTime = secondsPerPomo;
    } else {
      secondsPerPomo = 60 * Number(inputMins.value) + Number(inputSecs.value);
      currentTime = secondsPerPomo;
    }
  }
  timeRemaining = secondsPerPomo;
  updateCircle(timeRemaining, secondsPerPomo);
  intervalId = null;
}
inputSecs.oninput = secondChange;

/*
 * Notfication Sound Functions
 */

/**
 * This function begins playing the audio associated with the alarm. It sets the audio's volume, as well as which sound will be played.
 * It also adds a function to the start/stop button and reset button to stop the audio clip when pressed, otherwise it will continue on a loop.
 */
function sound() {
  const x = document.getElementById("changeSelect").value;
  const volLevel = document.getElementById("volume-slider").value / 100;
  let audioSound;
  if (x == "Chirp") {
    audioSound = new Audio(
      "https://freesound.org/data/previews/456/456440_5121236-lq.mp3"
    );
    audioSound.volume = volLevel;
  } else if (x == "Alarm-Clock") {
    audioSound = new Audio(
      "https://freesound.org/data/previews/219/219244_4082826-lq.mp3"
    );
    audioSound.volume = volLevel;
  } else if (x == "None") {
    audioSound = new Audio(
      "https://freesound.org/data/previews/219/219244_4082826-lq.mp3"
    );
    audioSound.volume = 0;
  }

  // Check if audio sound was successfully gotten (useful for jest)
  if (audioSound) {
    // infinite loop
    audioSound.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
    audioSound.play();
  }

  // Stop alarm sound
  document.getElementById("mixBut").onclick = function (event) {
    stopAlarm();
  }; // stop alarm when press stop
  document.getElementById("reset-btn").onclick = function (event) {
    stopAlarm();
  }; // stop alarm when press reset
  function stopAlarm() {
    if (audioSound) {
      audioSound.pause();
      audioSound.currentTime = 0;
    }
  }
}

// automatically save when audio option is changed
const audioSelect = document.getElementById("changeSelect");
audioSelect.addEventListener("change", function () {
  saveSettings();
});

/*
 * Making sure the volume-number and the volume-slider always match
 */
const slider = document.getElementById("volume-slider");
const numInp = document.getElementById("volume-number");
slider.oninput = function () {
  document.getElementById("volume-number").value = document.getElementById(
    "volume-slider"
  ).value;
  saveSettings();
};
numInp.oninput = function () {
  document.getElementById("volume-slider").value = document.getElementById(
    "volume-number"
  ).value;
  saveSettings();
};

// save custom timer settings
const form = document.getElementById("saveSettings");
if (form) {
  form.addEventListener("submit", function (e) {
    saveSettings();
  });
}

// starting the circle timer animation
const progressBar = document.querySelector(".e-c-progress");
const pointer = document.getElementById("e-pointer");
const length = Math.PI * 2 * 100;
progressBar.style.strokeDasharray = length;

function updateCircle(value, timePercent) {
  pointer.style.transform = `rotate(${(360 * value) / timePercent}deg)`;
  const offset = -length + (length * value) / timePercent;
  progressBar.style.strokeDashoffset = offset;
}
