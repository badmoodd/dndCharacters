import { DnDBackground } from "@/models/DnDBackground";
import { DnDClass } from "@/models/DnDClass";
import { DnDFaction } from "@/models/DnDFaction";
import { DnDRace } from "@/models/DnDRace";

export const races: DnDRace[] = [
 {"id": 1, "name": "Человек", "description": "Универсальные и адаптивные существа, мастера многих профессий."},
 {"id": 2, "name": "Эльф", "description": "Грациозные и долгожители, обладают высокой ловкостью и владеют магией."},
 {"id": 3, "name": "Дварф", "description": "Крепкие и выносливые, с отличным чувством ремесла."},
 {"id": 4, "name": "Гном", "description": "Мелкие изобретатели и мастера в области технологии и магии."},
 {"id": 5, "name": "Полурослик", "description": "Подвижные и обаятельные, отличные в хитрости и скрытности."},
 {"id": 6, "name": "Драконорожденный", "description": "Расы, унаследовавшие черты драконов, с различными способностями."},
 {"id": 7, "name": "Тифлинг", "description": "Потомки демонов или ангелов, обладают мистическими способностями."},
 {"id": 8, "name": "Полуэльф", "description": "Смесь человеческой и эльфийской крови, обладают частичной эльфийской грацией и человеческой универсальностью."},
 {"id": 9, "name": "Полуорк", "description": "Потомки орков и людей, сильные и устойчивые."},
 {"id": 10, "name": "Галфлинг", "description": "Маленькие, ловкие и умелые в скрытности и обходе препятствий."},
 {"id": 11, "name": "Аасимар", "description": "Потомки ангелов или других сверхъестественных существ, обладают священной магией и светлыми чертами."},
 {"id": 12, "name": "Фиолетовый червь", "description": "Таинственные и псионически одаренные существа, обладают уникальными способностями ума."},
 {"id": 13, "name": "Кенку", "description": "Птицеподобные существа, обладают великолепной ловкостью и преданностью."},
 {"id": 14, "name": "Лепрекон", "description": "Маленькие и хитрые, с талантом к уходу и обладатели некоторой магии."},
 {"id": 15, "name": "Табакси", "description": "Кошачьи люди, обладающие кошачьими чертами и ловкостью."},
 {"id": 16, "name": "Торболды", "description": "Медвежье-подобные существа, силой и выносливостью медведя."},
 {"id": 17, "name": "Юнги", "description": "Подводные существа с чертами рыб или морских обитателей, адаптированные к жизни в воде."}
]


export const classes: DnDClass[] = [
 {"id": 1, "name": "Бард", "description": "Вы музыкант, поэт или историк, использующий искусство для влияния на других."},
 {"id": 2, "name": "Варвар", "description": "Вы берсерк, человек действия, доверяющий своим инстинктам."},
 {"id": 3, "name": "Волшебник", "description": "Вы изучили магию и получили знания, необходимые для её применения."},
 {"id": 4, "name": "Воин", "description": "Вы обладаете боевыми навыками и военной тренировкой."},
 {"id": 5, "name": "Друид", "description": "Вы связаны с природой и владеете магией, основанной на ней."},
 {"id": 6, "name": "Жрец", "description": "Вы служитель божества, получающий свои способности из веры."},
 {"id": 7, "name": "Колдун", "description": "Вы заключили пакт с могущественным существом, обладающим магической силой."},
 {"id": 8, "name": "Монах", "description": "Вы обучены тайным искусствам, в том числе боевым и духовным."},
 {"id": 9, "name": "Паладин", "description": "Вы чемпион добра и справедливости, обладающий священной силой."},
 {"id": 10, "name": "Плут", "description": "Вы искусный обманщик и умелец в скрытности и уклонении."},
 {"id": 11, "name": "Рейнджер", "description": "Вы мастер выживания в дикой природе и искусный охотник."},
 {"id": 12, "name": "Чародей", "description": "Ваша магия проистекает от внутренних источников, вы не изучали её, артефакты или пакты."}
]


export const backgrounds: DnDBackground[] = [
 {"id": 1, "name": "Артист", "description": "Вы художник, актер или музыкант, виртуозно владеющий своим ремеслом."},
 {"id": 2, "name": "Беспризорник", "description": "Вы выросли на улицах без прямого попечения взрослых."},
 {"id": 3, "name": "Благородный", "description": "Вы родились в благородной семье, имеющей связи и ресурсы."},
 {"id": 4, "name": "Гильдейский ремесленник", "description": "Вы присоединились к гильдии или ассоциации как мастер своего ремесла."},
 {"id": 5, "name": "Моряк", "description": "Вы провели большую часть своей жизни на кораблях."},
 {"id": 6, "name": "Мудрец", "description": "Ваша жажда знаний непревзойденна."},
 {"id": 7, "name": "Народный герой", "description": "Вы известны в небольшом сообществе как герой или защитник."},
 {"id": 8, "name": "Отшельник", "description": "Вы провели большую часть жизни в одиночестве или вдали от цивилизации."},
 {"id": 9, "name": "Пират", "description": "Вы были частью пиратской братии или работали на корабле сомнительной репутации."},
 {"id": 10, "name": "Преступник", "description": "Вы занимались преступной деятельностью и знаете, как избегать закона."},
 {"id": 11, "name": "Прислужник", "description": "Вы служили кому-то в качестве слуги или подчиненного."},
 {"id": 12, "name": "Солдат", "description": "Вы служили в вооруженных силах страны или организации."},
 {"id": 13, "name": "Чужеземец", "description": "Вы родились или провели долгое время в другой стране или культуре."},
 {"id": 14, "name": "Шарлатан", "description": "Вы искусный обманщик, знающий, как обмануть доверчивых людей."}
]

export const factions: DnDFaction[] = [
 {"id": 1, "name": "Harper", "description": "Фракция, занимающаяся сбором информации и поддержанием баланса сил в мире."},
 {"id": 2, "name": "Lord's Alliance", "description": "Альянс правителей и правительств, стремящийся к сохранению стабильности и мира."},
 {"id": 3, "name": "Zhentarim", "description": "Тайное общество, ориентированное на власть и контроль."},
 {"id": 4, "name": "Emerald Enclave", "description": "Фракция, посвященная защите и сохранению природы."},
 {"id": 5, "name": "Order of the Gauntlet", "description": "Орден, сфокусированный на борьбе с злом и защите бесправных."},
 {"id": 6, "name": "The Kraken Society", "description": "Таинственная фракция, посвященная изучению и использованию силы моря."},
 {"id": 7, "name": "The Cult of the Dragon", "description": "Культ, поклоняющийся драконам и стремящийся к их власти."},
 {"id": 8, "name": "The Bregan D'Aerthe", "description": "Тайная организация наемников и шпионов, ориентированная на власть и деньги."}
]

