Docker: 
  docker build -t msw .
  docker run -p 3000:3000 -v ~/Documents/UI/bootstrap/:/bootstrap -d msw
  docker exec -it 8ddb93a48ac4 /bin/bash
  
  
Themes:
https://github.com/thomaspark/bootswatch/