import { $ } from "@builder.io/qwik";

export const useOpenModal = () => {
  const openModal = $(() => {
    const modal: any = document.getElementById("my_modal_1");
    modal.showModal();
  });
  return openModal;
};
