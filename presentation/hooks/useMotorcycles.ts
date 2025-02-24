import { getMotorcycles } from "@/services/actions/getMotorcycles";
import { Motorcycles } from "@/types/motorcycles";
import { useState, useEffect, useCallback } from "react";

export const useMotorcycles = () => {
  const [motorcycles, setMotorcycles] = useState<Partial<Motorcycles>[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getDataMotorcycles = useCallback(async () => {
    try {
      setLoading(true);
      const motorcycles = await getMotorcycles();
      setMotorcycles(motorcycles);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getDataMotorcycles();
  }, []);

  return { motorcycles, loading, error };
};
