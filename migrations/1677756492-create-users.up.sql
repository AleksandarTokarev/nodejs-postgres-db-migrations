create table if not exists users
(
	id serial
		constraint users_pk
			primary key,
	name text
);

