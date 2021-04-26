<template>
  <div>
    <div class="padding-container">
      <p class="guest-title">Live Streaming</p>
      <div class="youtube-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZbC7hvPVYYg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="ucapan-doa">
        <p class="guest-title">Ucapan & Doa</p>
        <div class="ud-wrapper">
          <div class="nama">Kosuke</div>
          <div class="ucapan">Selamat menempuh hidup baru!!!</div>
        </div>
      </div>
      <div class="form-ucapan-wrapper">
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
            <p>Pesan</p>
          </div>
          <div class="rsvp-input">
            <textarea
              type="text"
              name="nama"
              placeholder="Tulis pesanmu..."
              cols="30"
              rows="5"
              wrap="off"
            />
          </div>
        </div>
        <div class="button-container">
          <div class="button-buka-undangan" :class="$mq">
            <div class="button-bu-icon" :class="$mq">
              <div class="button-bu-text" :class="$mq">Kirim</div>
            </div>
          </div>
        </div>
        <div class="powered">
          <p>Powered by: Azeg</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="@/assets/css/sections/guest.css" scoped/>