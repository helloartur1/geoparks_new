import { IGeopark } from "@core";

export const GEOPARKS: IGeopark[] = [
    {
        id: '41f271c8-e8ba-4225-b21d-403f9751e5a7',
        name: 'Геопарк Янган-тау',
        latitude: 55.2455 ,
        longitude: 58.2935,
        description: 'Геопарк «Янган-Тау» расположен на территории Салаватского района Республики Башкортостан. Площадь составляет 1774 км.кв. На территории имеется более 30 геологических объектов, из которых 3 (разрез Мечетлино, разрез Большая Лука, гора Янгантау) имеют международную, 10 – национальную и 21 объект – образовательную значимость.Природное наследие представлено большим разнообразием видов растений и животных, занесённых в Красную книгу России. ',
        pathPhoto: 'http://localhost:8000/Pictures/yangantau.png',
    },
    {
        id: '07599ea7-76aa-4bbf-8335-86e2436b0254',
        name: 'Геопарк Торатау',
        latitude: 53.554764,
        longitude: 56.096764,
        description: 'Геопарк «Торатау» расположен на стыке южной части Уральских гор и восточной окраины Восточно-Европейской платформы. Территория богата уникальными геологическими объектами. Они представляют научную, историческую, природную ценность. Возраст пород составляет от 1 млрд до 250 млн лет. Главные объекты геопарка — геологический разрез Усолка, шиханы Торатау, Юрактау и Куштау.',
        pathPhoto: 'http://localhost:8000/Pictures/toratau.png',
    }
];