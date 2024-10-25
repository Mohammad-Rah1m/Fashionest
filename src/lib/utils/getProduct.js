import path from "path";
import { promises as fs } from "fs";

export async function getProductData(category) {
    const filePath = path.join(process.cwd(), "src/app/api/productsData.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const productsData = JSON.parse(jsonData);
    return productsData[category] || [];
}
