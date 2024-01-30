const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();

// Configuração do Passport
passport.use(new LocalStrategy(
  (username, password, done) => {
    // Aqui você deve verificar se o username e a senha são válidos,
    // por exemplo, consultando um banco de dados.
    // Por simplicidade, vamos assumir que o usuário é válido.
    return done(null, { username: username });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Configuração do Express
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Rota de login
app.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
}));

// Rota de perfil
app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Bem-vindo, ${req.user.username}!`);
  } else {
    res.redirect('/login');
  }
});

// Rota de login (página de login)
app.get('/login', (req, res) => {
  res.send('Por favor, faça login:');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
