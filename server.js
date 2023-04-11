const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Запуск localhost:${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> a7027fb (fix files)
