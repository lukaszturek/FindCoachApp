<template>
    <header>
        <nav>
            <h1><router-link to="/coaches">Find a Coach</router-link></h1>
            <ul>
                <li><router-link to="/coaches">All Coaches</router-link></li>
                <li><router-link to="/requests">Requests</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
    margin: auto;
    padding: 0;
    height: 5rem;
    background-color: #3d008d;
    display: flex;
}

nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

h1 {
	margin: 0;
	display: flex;
	align-items: center;
}

h1 > a {
	margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}

li {
	margin: auto 0.5rem;
}

li > a {
    display: inline-block;
    font: inherit;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: #f391e3;
	cursor: pointer;
    border: 1px solid transparent;
}

li > a:hover,
li > a:active,
li > .router-link-active {
    border: 1px solid #f391e3;
}
</style>