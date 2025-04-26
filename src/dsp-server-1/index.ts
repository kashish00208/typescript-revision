import express, { Request, Response } from "express";

const server = express();

const PORT = 3001;
server.use(express.json());


interface Adrequest {
  publisher_id: number;
  ad_slot_id: number;
  geo: string;
  device: string;
}

interface Creative {
  image_url: string;
  click_url: string;
}

interface BidResponse {
  winner_dsp: string;
  Bid_price: number;
  creative: Creative;
}

server.post("/bid", (req: Request, res: Response) => {
  const { publisher_id, ad_slot_id, geo, device } = req.body as Adrequest;
  if (geo === "IN" && device === "mobile") {
    const Bid_price = parseFloat((Math.random() * 5).toFixed(2));
    const winner_dsp = "DSP_A";
    const creative: Creative = {
        //dummy url for bid
      image_url: "https://via.placeholder.com/300x250?text=Ad+from+DSP1",
      click_url: "https://example.com/landing-page",
    };
    const response : BidResponse = {winner_dsp,Bid_price,creative}
    return res.json(response);
  }
  res.status(204).send();//there is no bid to send it did not match with the publisher'info

});
server.listen(PORT, () => {
  console.log(`DSP Server 1 running on port ${PORT}`);
});
