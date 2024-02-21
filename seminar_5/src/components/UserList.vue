<template>
	<User v-for="user in users" :key="user.id" :user="user" />
</template>

<script>
import User from './User.vue';

export default {
	components: { User },
	name: 'UserList',
	props: {},
	data() {
		return {
			users: [
				{
					id: 1,
					name: 'Bob',
					surname: 'Marley',
					email: 'bob@marley.com',
				},
				{
					id: 2,
					name: 'Walt',
					surname: 'Disney',
					email: 'walt@disney.org',
				},
				{
					id: 3,
					name: 'Jery',
					surname: 'Davidson',
					email: 'jery@davidson.ru',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped></style>
