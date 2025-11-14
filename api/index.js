import { createStaticPix } from "pix-utils";

export default async function handler(req, res) {
  try {
    const { transactionAmount } = req.body;

    const pix = createStaticPix({
      pixKey: "ad250fb6-ed25-4797-8f39-360b503158f4",
      merchantName: "GUSTAVO NOGUEIRA",
      merchantCity: "SALVADOR",
      transactionAmount: parseFloat(transactionAmount) || 15.11,
      infoAdicional: "CINÉAGAPE - INGRESSO - HORÁRIO: 14h30"
    });

    res.status(200).json({ brCode: pix.toBRCode() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
