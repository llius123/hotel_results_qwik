import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <header class="flex h-14 w-full items-center justify-center border-b">
      <div onClick$={() => nav("/home")}>Home</div>
    </header>
  );
});
