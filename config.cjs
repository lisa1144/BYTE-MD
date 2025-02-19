const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VUXY+iShD9L/2qWfkSwWSSRUBFFEVHVG7uQw802gINdjcqbvzvG3Rmd5Pdu5n71hRddU6dPlXfACkwQy6qQf8bKCk+Q46aI69LBPpgUCUJoqANYsgh6APBzaXUU/KeNkqTzkDzegNVuRhparssH2+N0SBUXbT0S4G9gHsblNVbhqO/FJzDFEXsdLT2LWSYnrDeTtQTu4x1BvdZyyALe8CJNRTpyn4B96YixBSTvV0eUI4ozFxULyCmn6Mf2bfBOtbCt9MuOXjBDC+nkWVh/Qx3x7dEITcPmbW5mZkb53P08VLzZ7az6i1HySKn+Yn6qmvaoXnNL6fZ9WBOZ9NduGe1rzzpM7wnKHZiRDjm9ad1RwM/cSvmpMNCXmSnVs+aBNelMajSGTzrHte2O5VAZU6l9HPEC8eTOgt9eN5PIfaxP7rkalUa2oJdyu0IbQ9zD87PZm8rF78SX9APr6T/R/fT1Cf+9RQQMSiPHQspEXWZuJkpy7pMvWRcuYbm7+x6P/ok/bQVqsvAuobGeT4qR4fWhpPOMb8VbKzV8bCWFvv8tspHlRD9pA95Rf/GciM5wWbn8/VRvI3XIzUkNcqswBuHa/uSlP7beCdKx2HWPZ+CMukoZI4G1dgTs8lx3Z0aBpZZGulxyKqMypK6Emdebe5fHh2lqHZi0BfvbUDRHjNOIccFaWKK1gYwPq9QRBF/qAu8+CYP8dW+8ckQEysPSQcflrqnr1MtmzjxMH/LnPLmzX32AtqgpEWEGEPxGDNe0HqGGIN7xED/n8dDNT1TlBccTXAM+kCS5a7cFXpCT1K+si+XA+QMluUXgjhog4QW+QyBPqcVaoNHgmwYvaHdlWxb7EmKLiu2pDRd5U+gV5wjxmFegr7Yk3Vd6Im6ev+3DQi68qdlmkZlsQ0STBlfk6rMChh/+OnjJ4yioiJ8VZPIbA6Igr7wM4w4x2TPmm4qAml0wGdkNtxBP4EZQz+0RRTF77Ef2U1WjDjEGQN9YM4XrpIXvsqs17O/2xkrw3ANoxHzA+3DMM8XaXUudIeFnlhrXnVL1OUp7BKhu2HzgJwc1C274kJbiVvn4v+pCOgD5RDvqLjbVudUmL4WNNloBX5b6vM6PMKFGDmJz3PGgjQJzU7Y6fgCFiRmZvPrdWR4aTJFy5NyYJOdzMoLGSF7sWlZxkuDFqMzjtCvYNLyusJU2mZreWt388DtquKaJpC6UebOZ4E+TK3DVYoDdWaqphwdDfm6a7m3zbUMnVkmOzTXuqaVW127456ESazDseE/rZw/Zug3I/Wl362UPW7pmqjJiiSJuqypQl/62oQ/ZjJ734X43a748Zlg9FgtBOboEzhPARobCff2LyXed9V/zPsgOWuu5PC5Hp2tNya3UpijUJ8H1MpCFY8riOLXjs2DemaDe+PnMoM8KWjebP7yUBAE2oAWVWNLhyTFX7BMw3EG7wJmkHHjp9X/ND3S89aCFuUYskMzgvvFepKC+3eYaXPqsgcAAA==",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "233535070724",
  "OWNER_NAME": process.env.OWNER_NAME || "Jeff",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'false',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'false',
  "AUTO_REACT": process.env.AUTO_REACT === 'false',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
