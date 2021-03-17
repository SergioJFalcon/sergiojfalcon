import { GoogleSpreadsheet } from 'google-spreadsheet';

//config vars
// const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
// const SHEET_ID = process.env.REACT_APP_SHEET_ID;
// const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
// const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

const SPREADSHEET_ID = "1-QseTZnudhKuoYnbB-T8UachmZOKnr0z1iSxrEwsnwA";
const SHEET_ID = 0;
const CLIENT_EMAIL = "personal@video-browser-238905.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCwkp9Cd+SP+53a\nOOC2cle0DNOVzNV2zIpW9NztjP+jt9lifDDZL9fSiOSLf1kOCDozEk1BSSHG6v8M\nLMf9hAEFCnGxE5KnsT3gvkOEVbk/8EvteDc6+6FkWJDIB0gg0RRLLjbqi76mewBP\nhGBx94ndMDLJtVjh/A8Ml2hbvBIC/FL/9hp+y/w+1kThPoY9ipegEyufqIz8f2iz\n9vOghqHSE49FnDoInrwIeokjkrYSgcpT2NHlsa11u2PgDRTqdqJFENrTYD0BXe5T\n5wSFAX7VpiE5Fmg7v7VpkPgzRAcwatoMU1XWXtMXr5j1rBNrHlexMO1mMoAUZL1P\n4YTWpaldAgMBAAECggEAHBdvm/kMFXYgAnhbE9u0JVKHFQWODoTzG2uAfJCamTbm\nMFt2wA7zBK0/wwvDJM7dR4PJY7IZXBbF9e9n7+bg7KbhOJ1XDzPNFuTeQ/8JZmk6\nAzFFhC5FWnwWqKQz7vikhGN5XC5Yag8WmRAD8g3CUrzYz6t41RcvY77w3OtaaDvt\n1eVibv324+e80nZbH9r7TYl87fCQHkkzLfhn2l9jVhee3dh30EkOGZq44TXkUSRj\nRkUb2D3q0F7KFa0bEK8vtP6uuDfnsm620fhUVHEh/uj5QiKLZMEHMZNULrK/IAqs\n2Uy+fniPDtFB02L3jN2LR30hK/1Tmo7zfTQ9azUx9wKBgQDekBUadfyEpNX4anWZ\nxAGC6/GxwOi8SKSuCSqZ8GjFJywIZqoWLPZci0XRB301lgH4zuXAk6OLv1EQR3FA\n+IobM0VWf9uecuZdsdwckhsn69dmKH+6jTqMDl61O3fzgkdRDqHvZJB9do4azWSG\nPm9g1P/bBelhaUXRAjEjdWCcowKBgQDLGbrci90Vqd8V3atJTcR4Yzv+ceHbNwH9\nbzTZ+115JKm0Lxcf/zzrntK3i/CimgTfSiLVFXb1ZmIEOt+mLwecrw77mBEDtLKu\nlTjsRpbHEc4KAwDhh6rQiKroZ3o428Al4la+cujZ0ATcVqPrtP+Xm00CSoUDnTKv\n2cHYwc8B/wKBgQDBc9G0F1wv26tU6wxfZHy/1OBX1ks15Zqm37bU6Z/Xxo3Cm6I5\n9kkJ9dDwuSa/Xi1GnGgd9PaSMPCASukJRT+eFvmtDyPRXSQZytB9UQ4jrB6lYIxt\nlfaO6Kqvswo3ckUVErf1Ap+JPnSUnXVELp7XNy1RrpjGICAcZWBa5trcKwKBgQCl\n5Mdf/BJC7rUcrCqLvqzbVNsdM7IzF9RVSS+XWZ15JTxExC4UYaxGHT2q1PBiMIII\nTQr0mArJ2a34HIqvuDx0e/01/njvWPqWZabQP7xKsD1mqhtfHCynFura2CLaLIzf\npOgLudp+h05hF5ffIMGg+SZG182cLRvIzYpr3aqTywKBgC5eC+mK3OWRfWimUWNo\nh4VG6SCN0pgq2cwXGyX+ymW1/Wv3rMstONlOir778RXyuzii21t4kFKNH5Yqsiii\nvGBud6TZnNYLVU6psNU+35itw6UPCRyPFvxo3DaAp/boZ13GZqudHI7jtxeg0S8O\nkW771Q6KROhdBAAiJFh+xQHm\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

// const appendSpreadsheet = async (row) => {
//     try {
//         await doc.useServiceAccountAuth({
//             client_email: CLIENT_EMAIL,
//             private_key: PRIVATE_KEY,
//         });
//         //loads document properties and worksheets
//         await doc.loadInfo();

//         const sheet = doc.sheetsById[SHEET_ID];
//         const result = await sheet.addRow(row);
//     } catch (e) {
//         console.error('Error: ', e);
//     }
// };
// const newRow = { Name: "new name", Value: "new value" };

export const projectInfo = async (row) => {
    await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
    });
    await doc.loadInfo();
    //console.log(doc.title);
    const sheet = doc.sheetsById[SHEET_ID];
    // const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    // // read rows
    console.log('row count: ', sheet.rowCount);
    let rows = await sheet.getRows(); // can pass in { limit, offset }
    console.log('info: ', rows);
    // // read/write row values
    console.log(rows[0].Title, rows[0].Description, rows[0].Role, rows[0].TechStack, rows[0].Image);

    return(rows);
}