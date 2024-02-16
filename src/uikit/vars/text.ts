const FONTS = {
  MAIN: 'Montserrat',
};

const PRIMARY_FONT = `
  font-family: ${FONTS.MAIN};
`;

const H1 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 34px;
  line-height: 48px;
`;

const H2 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
`;

const H3 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

const H4 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
`;

const MAIN = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const MEDIUM_1 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

const MEDIUM_2 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const SMALL_1 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
`;

const TH = `
  ${PRIMARY_FONT};
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const MAIN_BOLD = `
  ${MAIN};
  font-weight: 600;
`;

export default {
  H1,
  H2,
  H3,
  H4,

  MAIN,
  MAIN_BOLD,

  MEDIUM_1,
  MEDIUM_2,

  SMALL_1,

  TH,

  PRIMARY_FONT,
};
