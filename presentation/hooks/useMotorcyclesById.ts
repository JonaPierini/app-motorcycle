import { getMotorcyclesById } from "@/services/actions/getMotorcyclesById";
import { Motorcycles } from "@/types/motorcycles";
import { useState, useCallback } from "react";

export const useMotorcycleById = () => {
  const [motorcycle, setMotorcycle] = useState<Motorcycles>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getDataMotorcycleById = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const data = await getMotorcyclesById(id);
      setMotorcycle(data);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { motorcycle, getDataMotorcycleById, loading, error };
};
