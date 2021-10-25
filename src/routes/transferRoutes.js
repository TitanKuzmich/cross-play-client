import Vk from "../app/sections/Transfer/Platforms/Vk";
import Spotify from "../app/sections/Transfer/Platforms/Spotify";
import Yandex from "../app/sections/Transfer/Platforms/Yandex";
import Transfer from "../app/sections/Transfer";

export const transferRoutes = [
    {
        path: "/vk",
        title: "Export from VK",
        component: Vk,
        exact: true
    },
    {
        path: "/spotify",
        title: "Export from Spotify",
        component: Spotify,
        exact: true
    },
    {
        path: "/yandex",
        title: "Export from Yandex",
        component: Yandex,
        exact: true
    },
]
