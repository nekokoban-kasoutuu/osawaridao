import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x25A1C9d00ed5090627E25859b31D3020997E1e93", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Osawari Membership",
        description: "This NFT will give you access to OsawariDAO!",
        image: readFileSync("scripts/assets/hand.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
