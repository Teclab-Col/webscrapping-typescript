import { Router } from "express";

import WebScrapping from "../controllers/scrapping.controller";

const route = Router();

route.post("/updateListCampaing", WebScrapping.updateListCampaing );
route.post("/multicampaing", WebScrapping.getCampaingsNovaventa );

export default route;
