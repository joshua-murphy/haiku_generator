class WordList < ApplicationRecord

  def self.find_word(num)
    WordList.first.words.select{ |word| word[1] == num.to_s }.sample[0]
  end

end
