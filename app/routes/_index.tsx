// import PowerBIReport from "~/components/powerBiEmbedd";
import PowerBIWrapper from "~/components/powerBiWrapper";
import { Welcome } from "../welcome/welcome";

const config = {
  "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=424f3272-002d-4ada-b8b6-ae878d9dde1c&groupId=c11cf21f-e3fb-4518-99d5-0246c102312d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
  "embedToken": "H4sIAAAAAAAEACWUx66saAKD3-VsGYmcRroLYhWxyGlHhuInZ1r97nOme28vbH32Xz9WeoMxLX7--3MrVUZaUIuuxxeZXrk35RMWw8FHYaqr8JlogvAjCBYzWM3JENDIEs0NIK0j7zUNbhhnWGktc1vGJlZckOHlClmflAE-0U_EqnjhkR-lo3zSgULhcoAYLmpJf4KCrlwTNxmAZAlQEybdOBlwmH4bo5F9JTSk582qlzehWiA6fz2-Ba7FaL5lbgzp9oATSMhONU2-amwatVbDFqQdNFblIgg0eUMuDZNdQ-cJS9uBPP19OrzwVEkyM_FxNcSri1s-NWbWCqo2Fap11S3cg0BsXDlCTbUyeBBsHZw1yinkaqiMlMGZfqi1eFjlNyan50mqdLCQqdS2T2g3WXfJScO6OfyoeFhCnS5uJfdJQZ_QB5fBiehXzPU5cfD8idylYrGAQyWIjF48RWT2K1pBv2LRklNOVfYfOhTZQHQQSGhoR4hfAIW6JpJszN7x8NZnSjcIIoCSJi8rZ9K7YabJXVzLmcNgqtFlFEgn1yIwaTM6I9m3k7UnvB3ThA3qe-wqjHWL3YOM7M2RskqljikW-jTWPkWiam8jk7qoyzTMo0XBc-SCWeo0NpfB9nbg-JgbGR56W7yNN5yRxDhzZEgR5h1Gq2jjapmSXyC-bYpem6f8Cm8tYAvCsXh6XJKndzCtLUCOjyYmJA2D0WGMf-Q-iO17yH1ipT25P3FaAKdGiwyhwZKG1oLs3ZqWOSitn1ncIlAQ91wSBZfsWpo8mOJSBGsbg2eUcQK3t9sQ8ygCT-PMKNDahSFWTC-WT2FrhzsCtF2pkEMA5vdf3k-Sbvk-li5zH054lb_o0pEXNmCmJ-Ull0N1ZabfaKaS8NNjmr0-g-meVubGh4DnI4fFtO9kyicBjlqv__z5-c-PsNzTNmrl_Tuzo1WfSzj5YakVF6q8mmCcKxN0tuYt9sLfsNglUm77w-YQNMa8Dv6r1M-EpsZdIR9Ve9XBHEWfArOemSLxEFSFxjcKiVlyZc0X7O_rkhMIuROt3cvb84HCS4M3iWmqJ_bo2XBuhlqeDJHcMWfWvXO1DRtktzztaCpkVW00kGC_mIhurgZBiXQsNEtTA5evboXvHGUqmS5qMKED_Y0tVDhQj15xtCCUS3-vFGtYO0Ru2deRB2peT3VeA88e35K44GpLQW4XZ3HHOMJKFX4lVjQCv0VnAJqYDjWE03hv4O4xXVikJGQif8qGRT9dGbjKHm9eXgOvGiz-hbw1StS15yhE_ny4f2u-p6ZclOC3Zal6EdFlfaLj64c8r-58kWD2Pyq3rX9vY1_KX5kM-2zClBfsGFwZOdx7jhyKzThrYdyOBn1p0awK5qCUF1rXKl0lK27HOZ15125o04pBK0wsA3gM89cYuF9irIg3k1NXV-Zm6hMPvm4Durj3iBLMNJPz14dDUE6snM-5-vZCqsgEAuJWru8nHxqLKCMc5tPNAtQeLYQKi7e5CdNZzRpBuBIG_Gqshjv2sALT39zfLIgNZ-9K8Us-l2WLLp-IOhrD5LUlBiwpsf7VVkeRVLgQj_yyB6i2mAPlERrNwjhUqbfbz7WZKC68Zhox9dPdRSInz7hSRQfTE5W7l7EAzVSwvc1VQvfa4rrdw5PAKHIp7WLmE-OCiRCzkYqlARHP6__M__0_Kohb1VoGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzUzMjA5NTYzLCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
  "reportId": "424f3272-002d-4ada-b8b6-ae878d9dde1c"
}

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="w-full">
        <h2 className="p-4 text-4xl font-bold">Power BI Analytics</h2>
        <div className="w-full h-[40vw] bg-white p-4 mb-4 border border-gray-300 shadow-md rounded-lg">
          <PowerBIWrapper
            embedUrl={config.embedUrl}
            accessToken={config.embedToken}
            reportId={config.reportId}
            onEventCallback={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
