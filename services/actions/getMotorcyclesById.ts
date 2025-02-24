import { Motorcycles } from "@/types/motorcycles";
import { mapitApi } from "../api/mapitApi";

export const getMotorcyclesById = async (id: string): Promise<Motorcycles> => {
  try {
    const url = `/motos/${id}`;
    const { data } = await mapitApi.get<Motorcycles>(url);
    return data;
  } catch (error) {
    throw new Error("Error getting motorcycles");
  }
};
