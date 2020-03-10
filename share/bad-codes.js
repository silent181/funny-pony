var badCodesInFP = {
    /**
     * 使用map、some、filter等方法进行forEach操作，而不是使用其return value
     * 即模糊了数组api的语义化，又违背了函数式编程“数据不可变”的宗旨
     */
    forEach: arr => {
        // 1、使用了map却没有return
        arr.map(item => {
            // 2、执行一些副作用操作，如：
            item.name = 'xiaoming';
            // 3、入参item,返回item,完全没有体现出map的意义
            return item;
        });
    },

    /**
     * 不能正确使用filter
     */
    filter: people => {
        // (0、声明为let，却没有显示修改过变量，应该为const)
        let hairs = [];
        let girls = [];

        // 1、使用filter却没有return
        people.filter(person => {
            // 2、callback内部同样没有return
            if (person.isDeveloper) {
                // 3、使用了副作用方法push
                hairs.push(person.hair);
                girls.push(person.girlFriend);
            }
        });

        const developer = people.filter(p => p.isDeveloper);
        const hairs = developer.map(d => d.hair);
        // const hairs = developer.map(d => d.hair);
    }
}




































const developers = people.filter(p => p.isDeveloper);
const hairs = developers.map(d => d.hair);
const girls = developers.map(d => d.girlFriend);