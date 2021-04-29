import * as pageOperations from "./settings.js";

jest.mock("./stats.js");

window.alert = () => {};

describe("timeAdvance tests", () => {
  const minuteDisplay = document.getElementById("minute");
  const secondDisplay = document.getElementById("seconds");

  afterEach(() => {
    pageOperations.stopButton();
    pageOperations.resetButton();
    pageOperations.resetPomos();
  });

  test("Does timeAdvance correctly change the timer display", () => {
    for (
      let secondsRemaining = 25 * 60;
      secondsRemaining > 0;
      secondsRemaining--
    ) {
      let minute = Math.floor(secondsRemaining / 60);
      minute = minute < 10 ? "0" + String(minute) : String(minute);
      let second = secondsRemaining % 60;
      second = second < 10 ? "0" + String(second) : String(second);

      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe(
        minute + second
      );

      pageOperations.timeAdvance();
    }
  });
});

describe("Mixed Button tests", () => {
  const mixBut = document.getElementById("mixBut");

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    pageOperations.stopButton();
    pageOperations.resetButton();
    pageOperations.resetPomos();
  });

  test("Does the start button become a stop button", () => {
    pageOperations.startButton();

    expect(mixBut.value.toUpperCase()).toBe("STOP");

    jest.advanceTimersByTime(5000);
    expect(document.getElementById("seconds").innerHTML).toBe("55");
  });

  test("Does the stop button become a start button", () => {
    pageOperations.startButton();
    pageOperations.stopButton();

    expect(mixBut.value.toUpperCase()).toBe("START");

    jest.advanceTimersByTime(5000);
    expect(document.getElementById("seconds").innerHTML).toBe("00");
  });
});

describe("Break tests", () => {
  const minuteDisplay = document.getElementById("minute");
  const secondDisplay = document.getElementById("seconds");

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    pageOperations.stopButton();
    pageOperations.resetButton();
    pageOperations.resetPomos();
  });

  test("Does the timer stop counting down after 25 minutes", () => {
    pageOperations.startButton();

    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("2500");

    jest.advanceTimersByTime(25 * 60000);
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");

    jest.advanceTimersByTime(5000);
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
  });

  test("Does the timer begin a short break after the first pomo session", () => {
    pageOperations.startButton();
    jest.advanceTimersByTime(25 * 60000);
    pageOperations.stopButton();

    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0500");
    pageOperations.startButton();

    jest.advanceTimersByTime(5 * 60000);
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");

    jest.advanceTimersByTime(5000);
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
  });

  test("Does the timer begin a long break after the fourth pomo session", () => {
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("2500");
    pageOperations.startButton();
    jest.advanceTimersByTime(25 * 60000);
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
    pageOperations.stopButton();

    for (let i = 0; i < 3; i++) {
      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0500");
      pageOperations.startButton();
      jest.advanceTimersByTime(5 * 60000);
      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
      pageOperations.stopButton();

      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("2500");
      pageOperations.startButton();
      jest.advanceTimersByTime(25 * 60000);
      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
      pageOperations.stopButton();
    }

    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("3000");
    pageOperations.startButton();

    jest.advanceTimersByTime(30 * 60000);
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");

    jest.advanceTimersByTime(5000);
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
  });

  test("Does the timer repeat the correct pattern indefinitely", () => {
    for (let j = 0; j < 5; j++) {
      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("2500");
      pageOperations.startButton();
      jest.advanceTimersByTime(25 * 60000);
      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
      pageOperations.stopButton();

      for (let i = 0; i < 3; i++) {
        expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0500");
        pageOperations.startButton();
        jest.advanceTimersByTime(5 * 60000);
        expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
        pageOperations.stopButton();

        expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("2500");
        pageOperations.startButton();
        jest.advanceTimersByTime(25 * 60000);
        expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
        pageOperations.stopButton();
      }

      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("3000");
      pageOperations.startButton();
      jest.advanceTimersByTime(30 * 60000);
      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("0000");
      pageOperations.stopButton();
    }
  });
});

describe("minuteChange and secondChange tests", () => {
  const minuteDisplay = document.getElementById("minute");
  const secondDisplay = document.getElementById("seconds");
  const inputMins = document.getElementById("userMins");
  const inputSecs = document.getElementById("userSecs");

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    pageOperations.stopButton();
    pageOperations.resetButton();
    pageOperations.resetPomos();
    inputMins.value = "25";
    inputMins.oninput();
    inputSecs.value = "0";
    inputSecs.oninput();
  });

  test("Does changing userMins and userSecs update the timer display", () => {
    for (
      let secondsRemaining = 25 * 60;
      secondsRemaining > 0;
      secondsRemaining--
    ) {
      let minute = Math.floor(secondsRemaining / 60);
      inputMins.value = minute;
      inputMins.oninput();

      let second = secondsRemaining % 60;
      inputSecs.value = second;
      inputSecs.oninput();

      minute = minute < 10 ? "0" + String(minute) : String(minute);
      second = second < 10 ? "0" + String(second) : String(second);
      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe(
        minute + second
      );
    }
  });

  test("Does changing userMins and userSecs update the time remaining", () => {
    for (
      let secondsRemaining = 25 * 60;
      secondsRemaining > 0;
      secondsRemaining--
    ) {
      inputMins.value = String(Math.floor(secondsRemaining / 60));
      inputMins.oninput();

      inputSecs.value = String(secondsRemaining % 60);
      inputSecs.oninput();

      pageOperations.timeAdvance();

      let minute = Math.floor((secondsRemaining - 1) / 60);
      minute = minute < 10 ? "0" + String(minute) : String(minute);
      let second = (secondsRemaining - 1) % 60;
      second = second < 10 ? "0" + String(second) : String(second);
      expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe(
        minute + second
      );
    }
  });

  test("Does leaving userMins or userSecs blank break the timer", () => {
    inputMins.value = "";
    inputMins.oninput();
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("2500");

    inputSecs.value = "";
    inputSecs.oninput();
    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("2500");

    pageOperations.startButton();
    jest.advanceTimersByTime(1000);

    expect(minuteDisplay.innerHTML + secondDisplay.innerHTML).toBe("2459");
  });
});
