// Task 1

import axios from "axios";

async function fetchData<T extends object>(url: string): Promise<T> | never {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
