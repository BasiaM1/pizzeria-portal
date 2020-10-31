# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalnych i lokalnych)
  - lista rezerwacji i eventow zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i haslo
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolikow

- `/tables`

  - wybor daty igodziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 min
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółow

- `/tables/booking/:id` id-rezerwacji szczegoly rezerwacji albo ja zmodyfikowac
  - zawiera wszystkie informacje dotyczace rezerwacji
  - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
  - analogicznie do powyższej, bez początkowych informacji
- `/tables/events/:id` do wydarzen sa wprowadzane i modyfikowane tylko przez pracownikow
  - analogicznie dla powyższej, dla eventów
- `/tables/events/new`
  - analogicznie dla powyższej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter` lista stolikow oraz ich aktualny status - czy ktos zlozyl juz zamowienie, albo czy juz zaplacil
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new` - tu bedzie mogl wybrac produkty zamowiione z danego stolika
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamowienie (zamowione produkty z opcjami i ceną)
  - kwotę zamówienia
- `/waiter/order/:id` - zeby wyswietlic dane zamowienie
  - jak powyższa

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamowienia jako zrealizowane
