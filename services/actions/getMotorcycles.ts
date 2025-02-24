import { Motorcycles } from "@/types/motorcycles";
import { mapitApi } from "../api/mapitApi";

export const getMotorcycles = async (): Promise<Motorcycles[]> => {
  try {
    const url = `/motos`;
    const { data } = await mapitApi.get<Motorcycles[]>(url);
    return data;
  } catch (error) {
    throw new Error("Error getting motorcycles");
  }
};
