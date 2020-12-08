CREATE TABLE frog (
id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
frog TEXT NOT NULL,
cuteness TEXT,
size TEXT
);

module.export { frog }