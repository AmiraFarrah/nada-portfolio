Drop assets in the matching folder, then reference them from src/data/*.ts
as an absolute path starting with /media/ (NOT /public/media/).

Example:
  file      public/media/campaigns/hult-final.jpg
  reference "/media/campaigns/hult-final.jpg"

Video: .mp4, H.264, ideally under 8 MB each. Add a matching poster frame
(a .jpg of the first frame) in public/media/posters/ so nothing renders black
before playback.
