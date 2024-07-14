import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import LeftPannel from "~/components/hotel_results/LeftPannel";
import ResultList from "~/components/hotel_results/ResultList";
import Modal from "~/components/reusable/Modal";
import { CITY } from "~/components/url/useUrl";

export const onRequest: RequestHandler = async ({ redirect, url }) => {
  if (!verifyHotelResultsUrl(url)) {
    throw redirect(308, "/home");
  }
};

const verifyHotelResultsUrl = (url: URL) => {
  const city = url.searchParams.get(CITY);
  if (!city) {
    return false;
  } else {
    return true;
  }
};

export default component$(() => {
  return (
    <div class="flex pl-[10%] pr-[10%]">
      <div class="w-[30%]">
        <LeftPannel />
      </div>
      <div class="w-full">
        <ResultList />
      </div>
      <Modal />
    </div>
  );
});
