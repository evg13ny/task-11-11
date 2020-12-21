const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Фёдоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артём",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Нина",
            "id_3": "Зоя",
            "id_4": "Елизавета",
            "id_5": "Анастасия",
            "id_6": "Василиса",
            "id_7": "Екатерина",
            "id_8": "Мария",
            "id_9": "Ксения",
            "id_10": "Зарина"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтёр",
            "id_4": "Печник",
            "id_5": "Столяр",
            "id_6": "Пожарный",
            "id_7": "Автомеханик",
            "id_8": "Сантехник",
            "id_9": "Кузнец",
            "id_10": "Лесоруб"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Стилист",
            "id_2": "Флорист",
            "id_3": "Швея",
            "id_4": "Копирайтер",
            "id_5": "Секретарь",
            "id_6": "Медсестра",
            "id_7": "Косметолог",
            "id_8": "Стюардесса",
            "id_9": "Переводчица",
            "id_10": "Крановщица"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужской',
    GENDER_FEMALE: 'Женский',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        gender = this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;
    },

    randomFirstName: function () {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else
            return this.randomValue(this.firstNameFemaleJson);
    },

    randomSurname: function () {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else
            return this.randomValue(this.surnameJson) + 'а';
    },

    randomPatronymic: function () {
        let patronymic = this.randomValue(this.firstNameMaleJson);
        return this.nameToPatronymic(patronymic);
    },

    nameToPatronymic: function (name) {
        if (this.person.gender === this.GENDER_MALE) {
            switch (name) {
                case "Александр":
                case "Максим":
                case "Иван":
                case "Артём":
                case "Даниил":
                case "Егор":
                case "Фёдор":
                case "Семён":
                case "Вячеслав":
                case "Степан":
                    return name + 'ович';
                case "Дмитрий":
                case "Андрей":
                case "Николай":
                    return name.slice(0, -1) + 'евич';
                case "Никита":
                    return name.slice(0, -1) + 'ич';
                case "Михаил":
                    return name.slice(0, -2) + 'йлович';
                case "Василий":
                    return name.slice(0, -2) + 'ьевич';
                case "Пётр":
                    return name.slice(0, -3) + 'етрович';
                case "Павел":
                    return name.slice(0, -2) + 'лович';
            }
        } else {
            switch (name) {
                case "Александр":
                case "Максим":
                case "Иван":
                case "Артём":
                case "Даниил":
                case "Егор":
                case "Фёдор":
                case "Семён":
                case "Вячеслав":
                case "Степан":
                    return name + 'овна';
                case "Дмитрий":
                case "Андрей":
                case "Николай":
                    return name.slice(0, -1) + 'евна';
                case "Никита":
                    return name.slice(0, -1) + 'ична';
                case "Михаил":
                    return name.slice(0, -2) + 'йловна';
                case "Василий":
                    return name.slice(0, -2) + 'ьевна';
                case "Пётр":
                    return name.slice(0, -3) + 'етровна';
                case "Павел":
                    return name.slice(0, -2) + 'ловна';
            }
        }
    },

    randomProfession: function () {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else
            return this.randomValue(this.professionFemaleJson);
    },

    randomBirthday: function () {
        year = this.randomIntNumber(2002, 1950);
        month = this.randomValue(this.monthJson);
        if (this.month === 'апреля' || 'июня' || 'сентября' || 'ноября') {
            day = this.randomIntNumber(30, 1);
        } else if (this.month === 'февраля' & year % 4 === 0) {
            day = this.randomIntNumber(29, 1);
        } else if (this.month === 'февраля' & year % 4 != 0) {
            day = this.randomIntNumber(28, 1);
        } else day = this.randomIntNumber(31, 1);
        date = `${day} ${month} ${year} г.`;
        return date;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthday = this.randomBirthday();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};