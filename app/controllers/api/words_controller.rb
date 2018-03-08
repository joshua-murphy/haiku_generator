class Api::WordsController < ApplicationController

  def haiku
    @haiku = [[],[],[]]
    build_line(5).each {|num| @haiku[0].push(get_word(num)) }
    build_line(7).each {|num| @haiku[1].push(get_word(num)) }
    build_line(5).each {|num| @haiku[2].push(get_word(num)) }
    render json: @haiku
  end

  private

    def build_line(syllables)
      remaining = syllables
      syllable_arr = []
      while syllable_arr.sum < syllables
        num = rand(1..remaining)
        remaining -= num
        syllable_arr.push(num)
      end
      syllable_arr
    end

    def get_word(syllables)
      WordList.find_word(syllables)
    end

end
