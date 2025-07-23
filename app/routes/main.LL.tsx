import React from "react";
import DynamicLayoutWrapper from "~/components/DynamicLayoutWrapper";
import PowerBIWrapper from "~/components/powerBiWrapper";
import { MENUS } from "~/util/Constants";

const config = {
  "embedUrl": "https://app.powerbi.com/reportEmbed?reportId=df510bae-3e6d-40de-844d-23b265dd3e26&groupId=c11cf21f-e3fb-4518-99d5-0246c102312d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
  "embedToken": "H4sIAAAAAAAEACWTxxKr2AFE_-VtcRUZCVfNgiS45BzuTiBA5Bxd_nfLM9uuXp0-_Z8_9vtqh_fnz7__ZIi26bELJyyotoV6JM_PVqZENqcpGfDuk3ufVNKJp5pjKaSUAIxj3L0eW6JSPj4Vc0buEc0scU_xywIaKQfwaPEV79tJB7c1spTWhk6pBbh5MMYRQwQa7TUG4TCo4l6kpUJGnw1hmcNOJXyaaCdb6hDSUMHSJeemOOQHPJc2eoeRd7NVLGcz5knrI-Y_0UjSeT1-X5SE0OaOyc_zZhsqjNOkj_HPfQsCWVUTzR39w-5QlPAfnk-orhgybVSp6dHy9eYMGuNbm3a3pTDPeAjuKRbky7NWJ9tEr0zYtZIOSawkTWjWFs7-V12yFjqxB9HxQMoM5cQv41TIo4CNn61YzxyO3ORvQH_kkt6jyR6kq1IhS8rhodWgzpcvPcl0oouMgEk6nfA72p8vQt-kp9_HGTpVY15n-xpN9RMR47w6MWKcWNULxRKXPFTXh3CCACXiRp-e64-IfE1JZCTQueHiC1YESj7bU_vtqD5icmYzv1ohJW52QJ1zQf1Zi5Pj440wl22k-XbkXYkBMVeJ4PAHYNCwclx0HqybL-NMJtFSoyzi-3TOTkVtoXIMPGg0qoXvA8HaULTbIOtL1bhWr6jHSVJDyTITL30NwVjJ3g4C9huVeHtz-Oj2hS7Xr5Fbao0jcIKCVWbrjEEcX8vmct5wz1F2paKNaldHzyVzUqQGhh2utT25b1yPjCNDnqX-2ghbiqSYPW0zfIbZccxkJ9LuLZekqmdwf4yTmWekwyfyY-zXtttdmsHedSpDtRrfnP1uRCW2GAWqrswyGY2CozBRwA0MvjyWk8vkdrPZ6YVQB8N3ZqKqjRR-XRxPFaUFOGmSN3gVWw1QuQZ-zXJFrL0KMmedv_76868_wnyN66Dl1-9mOGItvAouHBHu6ohep5SoF3og9olLHElNHhvUxUHTN1Ff4zAyZMVyM7c0SPAiTvXxdF1ce-_P394mEraFRQnQdK5mNGo9ikV9PeHLO_VLxI_tNAeHxcupdocjYnDC8PA2roE3MoD_7OBOKqEoLafaAtN89nxOfLhtMzL1OEE9M4rrgBw58hZNO6dxuoNcP3nmv1bD_IYh76WKuJjNGiXEJQ8T3ogXj6FInt3fNrRt7hMz6c5qaGAK1pIhHhQmDyiRL6U9SMG2XtU993XwDXIS2gNmR_Sjkky1Y9bZHI0Eg-k8UXnI3ajPNSRequyFwY9eVDNIlW8S6GPTsFFzWU6Tvrl_MF_jN59B-KOsfuZ0t7QNun7mA28ZhM4kjr9bXlX273Wb819t_7GpjfWsOMn7DroY-jI2OqXiSbH1ZT6EX4fFfG8L0w-NZOqowEiU95PnyORp-CEV6HEj3ChqVYIdZZyJgvEnkfaLOVu04dex4zpVuPmiBFqi58h5KsPr9juHieHOHzKNXNh8fjuDPraefGBW4DxpoTX67kP0xSymRIcIV5CApwI6ZXdn4hirs9rjyBMO7rBl2edTtcHaZeYoQKv6FT2RFQuxwgDRRuLJumtjN_nGJ5PL_azzkrKF8rlVhQVbn3zHGvT6HMQipwdyykP5JRhjTtx9aM_KnOZp6oi3AqnO67hFTN4C4FZx3wXbHQJBL8Bp5Wu8GNQotTOs7zeGtm37f-f_-z-xwD0ZWgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzUzMjg1MjgzLCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
  "reportId": "df510bae-3e6d-40de-844d-23b265dd3e26"
}

export default function LL() {

  const handlePowerBIEvent = (eventType: string, event: any) => {
    console.log(`Power BI Event: ${eventType}`, event);

    
    // Handle specific events
    switch (eventType) {
      case "loaded":
        console.log("Report loaded");

        break;
      case "rendered":
        console.log("Report rendered");
    
        break;
      case "filtersApplied":
       
        break;
      case "dataSelected": {
        console.log("Data selected:", event.detail.dataPoints);
    
      }
 
      default:
        break;
    }
  };


  return (
    <div>
      <DynamicLayoutWrapper layout={"props.layout"}>
      <div className="w-full h-full" dataGrid={{x: 0, y: 0, w: 12, h: 12, minW: 2, maxW: 12}}>
            <PowerBIWrapper
           
              embedUrl={config.embedUrl}
              accessToken={config.embedToken}
              reportId={config.reportId}
              onEventCallback={handlePowerBIEvent}
            />
          </div>
        {MENUS.map((menu, index) => (
          <div key={index} className="w-full h-full" dataGrid={menu.layout}>
            <PowerBIWrapper
              visualName={menu.visualName}
              pageName={menu.pageName}
              embedUrl={config.embedUrl}
              accessToken={config.embedToken}
              reportId={config.reportId}
              onEventCallback={handlePowerBIEvent}
            />
          </div>
        ))}
      </DynamicLayoutWrapper>
    </div>
  );
}
