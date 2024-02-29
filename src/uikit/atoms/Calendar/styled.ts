import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars/index';

export const Selectors = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    &:first-child {
      width: 120px;
    }

    &:last-child {
      width: 90px;
    }
  }
`;

export const Control = styled.div``;

export const Wrapper = styled.div`
  display: table;

  .DayPicker {
    display: inline-block;
    font-size: 1rem;
  }

  .DayPicker-wrapper {
    position: relative;

    flex-direction: row;
    padding-bottom: 1em;

    user-select: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .DayPicker-Month {
    display: table;
    border-spacing: 0;
    border-collapse: collapse;

    user-select: none;
    outline: none;
  }

  .DayPicker-Body {
    display: table-row-group;
  }

  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-Day {
    display: table-cell;
    width: 35px;
    height: 35px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;

    transition: 0.2s ease-in-out;

    ${TEXT.MAIN};
    color: var(${COLOR.MAIN});

    &:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(
        .DayPicker-Day--outside
      ):hover {
      color: var(${COLOR.ACCENT});
      cursor: pointer;
    }

    &:not(.DayPickerDay--disabled):not(.DayPicker-Day--outside):not(
        .DayPicker-Day--selected
      ):active,
    &:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):not(
        .DayPicker-Day--selected
      ):focus {
      transition: none;
    }
  }

  .DayPicker-Day--highlighted {
    color: var(${COLOR.ACCENT});
  }

  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }

  .DayPicker-Footer {
    padding-top: 0.5em;
  }

  .DayPicker-TodayButton {
    border: none;
    background-color: transparent;
    background-image: none;
    box-shadow: none;
    color: #4a90e2;
    font-size: 0.875em;
    cursor: pointer;
  }

  /* Default modifiers */

  .DayPicker-Day--today {
    position: relative;
    color: var(${COLOR.ACCENT});

    &::before {
      content: '';
      position: absolute;
      top: 31px;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 25px;
      height: 4px;

      background-color: var(${COLOR.ACCENT});
    }
  }

  .DayPicker-Day--outside {
    cursor: default;
    color: var(${COLOR.MAIN_PALE});
  }

  .DayPicker-Day--disabled {
    cursor: default;
    color: var(${COLOR.PALE});
  }

  /* Example modifiers */

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(
      .DayPicker-Day--outside
    ) {
    background-color: var(${COLOR.ACCENT});
    border-radius: 5px;
    color: var(${COLOR.WHITE});
  }
`;
