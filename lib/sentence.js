'use strict';

const countSentences = function(sentences){
  if (!sentences) return 0;
  sentences = sentences.split(/[.!?]+/).filter(s => s.trim().length > 0)

  return sentences.length;
  
};

module.exports = countSentences;
