const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello')

    // Interpolated
    console.log('hello I am a %s string!', '+pp')

    // Styled
    console.log('%cI am some great text', 'font-size:50px; background:yellow; text-shadow: 10px 10px 0 blue')


    // warning!
    console.warn('Damn You!')

    // Error :|
    console.error('Damn You!')
    // Info
    console.info('Crocodiles eat 3-4 people per year')

    // Testing
    console.assert(1 === 3, 'Incorrect!')

    // clearing
    console.clear();

    // Viewing DOM Elements
    //console.log(p);

    // Grouping together
    dogs.forEach(dog =>{
        console.group(`${dog.name}`)
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7 } dog years old`);
        console.groupEnd(`${dog.name}`)
    });


    // counting
    console.count('Jelani')
    console.count('Jelani')
    console.count('Jelani')
    console.count('Mark')
    console.count('Jelani')
    console.count('Jelani')
  
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });
