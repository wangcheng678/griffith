import tkhd from '../tkhd'

const data = {
  duration: 60095,
  width: 368,
  height: 640,
  timescale: 1000,
  videoDuration: 128512,
  videoTimescale: 12800,
  audioDuration: 440320,
  audioTimescale: 44100,
  trackId: 1,
  type: 'video',
}

describe('tkhd box', () => {
  it('should be same', () => {
    // prettier-ignore
    expect(tkhd(data)).toEqual(new Uint8Array([
      0x00, 0x00, 0x00, 0x68,
      0x74, 0x6B, 0x68, 0x64,
      0x01, 0x00, 0x00, 0x07,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x01,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0xea, 0xbf,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x01, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x01, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x40, 0x00, 0x00, 0x00,
      0x01, 0x70, 0x00, 0x00,
      0x02, 0x80, 0x00, 0x00,
    ]))
  })
})
