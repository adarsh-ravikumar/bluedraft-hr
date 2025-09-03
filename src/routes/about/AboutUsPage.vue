<script setup lang="ts"></script>

<template>
  <div class="about_page">
    <header class="about__header">
      <h1 class="header__title">About Us</h1>
    </header>
    <div class="about__content">
      <img src="/placeholder.png" alt="placeholder" class="content__image" />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, commodi quia obcaecati eum
        perspiciatis, enim rem minus neque quisquam non quo dolor error natus eligendi magni ratione
        quam alias laudantium. Distinctio eum dolores necessitatibus, rem quam adipisci. Dolorem at
        commodi illum nemo ullam placeat eos tempora est qui nihil ea consequatur maiores architecto
        illo natus harum fugiat, optio, esse perferendis! Aliquid sapiente incidunt quos!
        Accusantium, rerum inventore officia minus ipsum expedita, dolor aut vero vel maxime
        suscipit! Consequuntur voluptatum exercitationem explicabo possimus, at laboriosam suscipit
        totam beatae, accusamus, sapiente temporibus? Id veritatis nobis facilis. Perferendis
        consectetur, harum quas similique earum quia incidunt itaque. Ullam fugit debitis repellat
        incidunt eaque, impedit consequatur qui doloremque illum dolore unde iste adipisci totam
        numquam! Sint autem non eius? Quidem facilis odit qui obcaecati illum laboriosam iure,
        dolorem dolores dolorum exercitationem, odio facere tempora, similique eaque veniam sit
        animi. Veniam corrupti itaque ipsum nemo nesciunt! Aspernatur id dolorem, culpa deleniti
        reiciendis suscipit iusto delectus, magnam ab voluptatem alias asperiores nisi velit sunt
        officia possimus accusamus? Quas odit ad iure, nesciunt nemo provident necessitatibus
        explicabo eaque? Veniam velit rem neque dolorem deserunt hic exercitationem consequatur eius
        facilis? Beatae nam eveniet nostrum ab eius voluptates cumque cum. Cupiditate sequi facilis
        deserunt modi odit qui enim quam accusantium. Architecto ex dolorem nihil reprehenderit,
        velit vero vitae sequi dignissimos atque numquam voluptates corporis accusantium blanditiis
        ea iste! Quidem obcaecati id reiciendis perferendis possimus nulla alias quam magni ipsa
        repellat. Ducimus, consectetur corrupti iusto animi adipisci facere fugit necessitatibus
        optio distinctio a. Facere fugiat odit ab, rem labore nesciunt illo autem officia voluptate
        accusamus quis ut quos vitae ea expedita? Debitis nulla sint ea facilis, reiciendis ab.
        Repellat maiores ea, magni esse nostrum molestiae incidunt, eveniet explicabo odit
        temporibus ducimus. Voluptas dolores sit quia esse tempore sequi iste eaque unde. Cupiditate
        suscipit iste autem. Totam, molestias eaque eos, suscipit ratione praesentium reiciendis
        ipsam sunt voluptatibus est quod aliquid nisi! Consequuntur est ex velit voluptatem dolores,
        voluptatum quis quos quidem aperiam. Quidem, odit rerum culpa quo modi vel minus. Vero
        voluptates rerum doloribus dolorum! Veniam nisi sequi dolorum? Debitis nostrum perspiciatis
        esse aliquam consequatur neque, voluptatum fugit totam dignissimos enim voluptate.
        Voluptatum labore sunt quo quibusdam eius quia laboriosam eveniet aliquam pariatur
        perspiciatis! Consectetur, quia odio. Ipsa eos amet ut suscipit consequatur totam voluptate
        deleniti excepturi et. Nisi quo minima veritatis. Voluptas repellendus corrupti blanditiis,
        velit exercitationem eius tempore molestiae dolore dignissimos inventore consequatur saepe
        aspernatur iste nesciunt. Recusandae vitae delectus quis, numquam voluptatum eaque ratione
        iure, praesentium quam consequatur quibusdam. Excepturi, quod est accusantium harum earum
        quis eos inventore suscipit. Eum perferendis exercitationem, similique officia non vitae
        ullam laudantium nihil illum amet adipisci facilis, porro voluptatem quasi voluptatum odit
        tempora? Beatae odit praesentium doloremque omnis adipisci, nihil excepturi eaque autem ipsa
        voluptatum amet quae obcaecati cum quod aut. Nisi minus magni eius error libero vitae magnam
        harum commodi pariatur quo. Quisquam cumque vero quos, tenetur aspernatur molestias mollitia
        quam voluptatum distinctio ab quas officia assumenda non fugiat. Ad nobis tempora,
        accusantium eius eligendi, laudantium consequatur animi minus laborum, qui debitis! At quasi
        laboriosam autem nobis velit reprehenderit consectetur debitis, id sunt tenetur inventore
        ratione fugit eum porro, sapiente repellendus consequuntur recusandae! Nobis nesciunt
        voluptatum fugit similique reiciendis eligendi distinctio libero? Hic provident reiciendis,
        soluta cum molestiae ea officia voluptates dolorem error atque ad aliquid vero repellat,
        doloremque odit quas libero eaque rerum, neque perspiciatis fuga. Eius officia tempore
        veniam aspernatur. Asperiores tempore, sunt optio nulla et quam numquam molestiae esse ut.
        Doloremque dolore, obcaecati voluptates qui sint asperiores. Odit optio delectus accusantium
        minima quod. Rem sapiente vero cupiditate magnam ea.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/variables.scss' as *;
@use '../../styles/mixins.scss' as *;

.about_page {
  padding-inline: $padding-body;
  .about__header {
    padding: $padding-body;
    background: $color-primary-300;
    text-align: center;
    border-radius: $border-radius-md;

    .header__title {
      color: $color-white;
    }
  }

  .about__content {
    .content__image {
      width: 100%;
      aspect-ratio: 10/3;
      object-fit: cover;
      object-position: center;
      border-radius: $border-radius-sm;
      margin-block: calc($padding-body / 2);
    }
  }
}
</style>
