import * as React from 'react';
import { Button, Divider } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { AutoSelectField, RangeField } from '../../../components';
import CategoryService from '../../../services/category-service';
import RarePlantService from '../../../services/rare-plant-service';
import FilterDrawer from './filter-drawer';

const Filters = ({ drawerWidth }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialSetupDone, setIntialSetupDone] = React.useState(false);

  const [categories, setCategories] = React.useState([]);

  const [priceBounds, setPriceBounds] = React.useState([0, 0]);
  const [priceRange, setPriceRange] = React.useState([0, 0]);
  const [category, setCategory] = React.useState(null);
  const [priceLowerBound, priceHigherBound] = priceBounds;

  const handlePriceRangeChange = (_, [min, max]) => {
    if (min === priceLowerBound) {
      searchParams.delete('price_gte');
    } else {
      searchParams.set('price_gte', min);
    }
    if (max === priceHigherBound) {
      searchParams.delete('price_lte');
    } else {
      searchParams.set('price_lte', max);
    }

    setSearchParams(searchParams);
  };

  const handleCategoryChange = (_, newCategory) => {
    if (newCategory) {
      searchParams.set('categoryId', newCategory.id);
    } else {
      searchParams.delete('categoryId');
    }

    setSearchParams(searchParams);
    setCategory(newCategory);
  };

  const deleteFilters = () => {
    searchParams.delete('price_gte');
    searchParams.delete('price_lte');
    searchParams.delete('categoryId');

    setSearchParams(searchParams);
  };

  React.useEffect(() => {
    (async () => {
      const [fetchedCategories, fetchedPriceRange] = await Promise.all([
        CategoryService.fetchAll(),
        RarePlantService.getPriceRange(),
      ]);
      const priceMinInit = searchParams.get('price_gte') ?? fetchedPriceRange[0];
      const priceMaxInit = searchParams.get('price_lte') ?? fetchedPriceRange[1];
      setPriceRange([priceMinInit, priceMaxInit]);

      const categoryId = searchParams.get('categoryId');
      if (categoryId) {
        const categoryInit = fetchedCategories.find((cat) => cat.id === categoryId) ?? null;
        setCategory(categoryInit);
      }

      setCategories(fetchedCategories);
      setPriceBounds(fetchedPriceRange);

      setIntialSetupDone(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FilterDrawer drawerWidth={drawerWidth}>
      {initialSetupDone && (
        <>
          <RangeField
            label="Kaina"
            value={priceRange}
            onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
            onChangeCommitted={handlePriceRangeChange}
            min={priceLowerBound}
            max={priceHigherBound}
          />
          <Divider sx={{ my: 2 }} />

          <AutoSelectField
            options={categories}
            value={category}
            onChange={handleCategoryChange}
            getOptionLabel={({ title }) => title}
          />
          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            fullWidth
            onClick={deleteFilters}
          >
            Pašalinti filtrus
          </Button>
        </>
      )}

    </FilterDrawer>
  );
};

export default Filters;
