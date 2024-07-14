import { $ } from "@builder.io/qwik";
import type { RouteNavigate} from "@builder.io/qwik-city";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

export const CITY = "city";

export const useUrl = () => {
  const loc = useLocation();
  const navigate: RouteNavigate = useNavigate();

  const updateCity = $((cityId: number) => {
    console.log(cityId.toString());

    loc.url.searchParams.set(CITY, cityId.toString());
    navigate(loc.url.href);
  });

  return {
    city: Number(loc.url.searchParams.get(CITY)) || 0,
    updateCity,
  };
};
