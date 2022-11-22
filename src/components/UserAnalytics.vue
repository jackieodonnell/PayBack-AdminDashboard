<template>
  <div class="user-analytics">
    <div class="registered-users">
        <p>Registered Users</p>
        <h2>{{this.$store.state.users.length}}</h2>
    </div>   
  </div>
</template>

<script>
export default {
    name: "user-analytics",
}
</script>

<style>
.user-analytics {
    display: flex;
    margin-left: 1%;
    margin-top: 1%;
    margin-right: 1%;
    width: fit-content;
    height: fit-content;
}
.user-analytics div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    border-radius: 5px;
    margin-left: 1%;
    margin-right: 1%;
    box-shadow: 0 0 10px 10px rgba(97, 97, 97, 0.151);
}

.user-analytics p {
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    color: rgba(72, 70, 70, 0.758);
    font-size: 1.2rem;
}

.user-analytics h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-top: 0;
    margin-bottom: 0;
}
</style>