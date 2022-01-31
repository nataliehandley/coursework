import * as challenge from "./js13";


  describe('greeting', () => {
      test ('correct greeting', () => {
          expect(challenge.greet()).toEqual("Hello, nice to meet you");

      })
  })




describe('addition', () => {
    test ('correct answer', () => {
        expect(challenge.sumTwoNumbers(1,2)).toEqual(3);
    })
})