import { useEffect, useState } from 'react';
import { ICategory } from '../interfaces';
import { ax } from '../utils';

export const useCategory = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ax.get('/categories')
      .then((res) => setCategories(res.data))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading };
};
