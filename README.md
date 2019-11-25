# Разбор второй лекции
### Ссылочная природа объектов.
***
В JS выделяют два типа данных: объекты и примитивы. При копировании примитива скопируется сам примитив. При копировании объека,
скопируется не сам объект, а ссыкла на него. Объект всегда в едиственном числе, а ссылок на него может быть сколько угодно. Новый объект создается только в момент присовения значения или когда в методе/функции присутствует return. Объект состоит из методов и полей. Метод -
это функция с привязкой к контексту. Поля или свойства - это характеристики объекта на которые можно ссылатся.  
### Заимствование котекста.
***
Как мы знаем метод QuerySelectorAll возвращает нам псевдомассив. Псевдомассив - это объект, структура которого совпадает со структурой массива (т.е. он хранит элементы в индексах от 0 до length-1), но при этом он не обладает методами, свойственными полноценным массивам из-за отличий в прототипе. Для того, чтобы использовать методы массива на псевдомассиве нужно преобразовать его в массив. Преобразовать в массив можно используя Array.from(QSA). Если нам нужно использовать методы массива без преобразования, то применяем заимстование контекста Array.prototype.filter.call(QSA, CallBack). Метод call('контекст','arg'). CallBack в роле аргумета call, так как метода filter() принимает в качества агрумента callback функцию. Мы берем свойство prototype из массива Array, в котором содержится метод filter и вызываем его в контексте QSA. Это и есть заимствование методов/контекста.
### Магия \_\_proto__
***
\_\_proto__ - это скрытое свойство объекта, которое ссылается на прототип. Свойство __proto__ срабатывает автоматически при поиске методов и свойств, которых нет у самого объекта и поиск продолжается у его прототипа.  
`const c={g:5} const obj ={a: 2,b: 3,__proto__: c}`  
При `obj.g` результат будет равен 5. Здесь `с` является прототип для `obj` и если какого-то свойста нет у объекта, поиск продожится по ссылке \_\_proto__ у его прототипа. Если из прототипа мы хотит использовать метод на нашем объекте, то вызов метода будет в контесте нашего объекта, а не в контесте прототипа. Это значит, что при вызове метода прототипа, this будет ссылатся на объект для которого был сделал вызов, а не там где объявлен метод. Это похоже на заимстование контекста Array.prototype.filter.call(QSA, CallBack).У объекта может быть только один прототип, тогда как у прототипа может быть множество дочерних элементов.  
### Классы
***
Класс - удобная констукция для задания функции констуктора и прототипа.
![Так выглядить класс](/class.png)


