// Example data for movie cards
const moviesData = [
    {
      title: 'Movie 1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_Aeq5vdpE8mpaK2vbkavCr3EssvCS1mo4w&usqp=CAU'
    },
    {
      title: 'Movie 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYEN0AQ4iScWpIOCnG9n24tHBq3THlfz3jA&usqp=CAU'
    },
    {
      title: 'Movie 3',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRcfYdEj3yJQdhc4OBonHXpH0JmOqy03kWQ&usqp=CAU"
    }
  ];
  
  // Generate movie cards dynamically
  const movieList = document.querySelector('.movie-list');
  
  moviesData.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    movieList.appendChild(movieCard);
  });
  