<template>
  <div>
    <div class="padding-container">
      <p class="rsvp">RSVP</p>
      <div class="form-rsvp-container">
        <div class="rsvp-header-container">
          <img
            src="../assets/app/lily-3.svg"
            alt="lily3-icon"
            class="lily3-icon"
            :class="$mq"
          />
          <p class="rsvp-title">
            Merupakan suatu kehormatan apabila Bapak/Ibu/Saudara/i berkenan
            hadir atau memberikan doa bila berhalangan. Atas kehadiran dan
            doanya, kami ucapkan terimakasih.
          </p>
        </div>
        <div class="form-rsvp-wrapper">
          <div class="form-group">
            <div class="rsvp-label">
              <p>Nama</p>
            </div>
            <div class="rsvp-input">
              <input
                type="text"
                name="nama"
                placeholder="Masukkan nama anda..."
              />
            </div>
          </div>
          <div class="form-group">
            <div class="rsvp-label">
              <p>No. Handphone</p>
            </div>
            <div class="rsvp-input">
              <input
                type="text"
                name="nama"
                placeholder="Masukkan nomor handphone..."
              />
            </div>
          </div>
          <div class="form-group">
            <div class="rsvp-label">
              <p>Pesan</p>
            </div>
            <div class="rsvp-input">
              <textarea
                type="text"
                name="nama"
                placeholder="Masukkan nomor handphone..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/sections/rsvp.css" scoped/>