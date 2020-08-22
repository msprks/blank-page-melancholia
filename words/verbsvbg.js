const VERBSVBG = ['being', 'fooling', 'referring', 'identifying', 'leaving', 'guiding', 'ranging', 'looking', 'telling', 'wishing', 'facing', 'evading', 'going', 'taking', 'thinking', 'typing', 'threatening', 'being', 'going', 'completing', 'making', 'correcting', 'naming', 'falling', 'thinking', 'making', 'painting', 'calling', 'showing', 'making', 'making', 'making', 'making', 'unyielding', 'being', 'Looking', 'exploding', 'taking', 'using', 'going', 'encasing', 'having', 'piercing', 'alternating', 'losing', 'revealing', 'concealing', 'covering', 'peeking', 'making', 'painting', 'letting', 'adding', 'moulding', 'placing', 'folding', 'pinning', 'Realising', 'coming', 'being', 'becoming', 'being', 'looking', 'being', 'remaining', 'becoming', 'working', 'looking', 'being', 'being', 'being', 'seizing', 'making', 'understanding', 'making', 'touching', 'seeing', 'shaping', 'seeming', 'discarding', 'abandoning', 'casting', 'making', 'feeling', 'thinking', 'string', 'hanging', 'containing', 'painting', 'protruding', 'missing', 'thinking', 'visiting', 'coming', 'viewing', 'making', 'making', 'providing', 'noting', 'being', 'fooling', 'capturing', 'repeating', 'following', 'faltering', 'being', 'being', 'evoking', 'making', 'Getting', 'making', 'discussing', 'encompassing', 'saying', 'including', 'including', 'celebrating', 'influencing', 'being', 'existing', 'trying', 'making', 'collapsing', 'making', 'overarching', 'having', 'making', 'referring', 'thinking', 'testing', 'attempting', 'describing', 'incorporating', 'shying', 'failing', 'sanitising', 'making', 'making', 'fooling', 'being', 'looking', 'protruding', 'dangling', 'According', 'working', 'living', 'working', 'striking', '–', 'making', 'including', 'figuring', 'Following', 'enquiring', 'showing', 'showing', 'arranging', 'piercing', 'passing', 'including', 'filling', 'experimenting', 'sprouting', 'hiding', 'letting', 'overflowing', 'saying', 'according', 'passing', 'connecting', 'comprising', 'overlaying', 'Having', 'looking', 'working', 'fuelling', 'making', 'thinking', 'peeling', 'probing', 'slicing', 'hitting', 'standing', 'Underlying', 'precluding', 'negating', 'reinstating', 'pointing', 'Placing', 'hinging', 'wrapping', 'gaping', 'following', 'playing', 'frogging', 'using', 'lying', 'concealing', 'revealing', 'likening', 'being', 'making', 'dying', 'squirming', 'thriving', 'standing', 'delving', 'being', 'according', 'making', 'wearing', 'denying', 'placing', 'striking', 'taking', 'showing', 'wearing', 'getting', 'performing', 'improvising', 'protesting', 'becoming', 'drawing', 'throwing', 'reeling', 'making', 'making', 'collecting', 'resulting', 'working', 'Moulding', 'flattening', 'pressing', 'hollowing', 'cutting', 'arranging', 'placing', 'displacing', 'replacing', 'making', 'shifting', 'describing', 'Sorting', 'tidying', 'writing', 'talking', 'marking', 'running', 'changing', 'drawing', 'playing', 'heightening', 'abandoning', 'being', 'working', 'including', 'subverting', 'going', 'Drawing', 'printing', 'discussing', 'laying', 'trying', 'placing', 'drawing', 'working', 'casting', 'adding', 'resting', 'fixing', 'echoing', 'arranging', 'making', 'making', 'making', 'seeing', 'handling', 'placing', 'removing', 'according', 'placing', 'making', 'casting', 'painting', 'Bringing', 'sliding', 'scaling', 'buckling', 'keeping', 'making', 'containing', 'straddling', 'continuing', 'connecting', 'making', 'keeping', 'stripping', 'extracting', 'following', 'turning', 'fixing', 'keeping', 'working', 'viewing', 'striking', 'striking', 'spreading', 'making', 'including', 'facing', 'being', 'regarding', 'making', 'sewing', 'Maintaining', 'supporting', 'striking', 'dangling', 'facing', 'popping', 'Doubling', 'pervading', 'including', 'being', 'protruding', 'falling', 'being', 'hanging', 'straggling', 'being', 'including', 'belonging', 'belonging', 'explaining', 'being', 'flowing', 'striking', 'looking', 'holding', 'having', 'depending', 'falling', 'exposing', 'overlapping', 'hanging', 'facing', 'recalling', 'twisting', 'Drawing', 'using', 'hanging', 'falling', 'being', 'coating', 'adding', 'mixing', 'looking', 'folding', 'leaning', 'protruding', 'string', 'unstring', 'using', 'layering', 'making', 'stuffing', 'pivoting', 'rotating', 'buckling', 'creating', 'differing', 'showing', 'hanging', 'being', 'varying', 'hanging', 'describing', 'seeing', 'viewing', 'fluctuating', 'shifting', 'using', 'putting', 'installing', 'existing', 'pressing', 'disappearing', 'varying', 'doing', 'trying', 'taking', 'looking', 'privileging', 'introducing', 'cooking', 'continuing', 'folding', 'varying', 'including', 'connecting', 'moulding', 'working', 'connecting', 'making', 'talking', 'working', 'working', 'working', 'saving', 'becoming', 'succumbing', 'delving', 'Holding', 'salvaging', 'testing', 'testing', 'jotting', 'referring', 'making', 'following', 'burning', 'increasing', 'being', 'painting', 'finding', 'being', 'meaning', 'missing', 'painting', 'engaging', 'painting', 'painting', 'working', 'proving', 'Acknowledging', 'according', 'According', 'consisting', 'being', 'releasing', 'homogenising', 'judging', 'producing', 'pointing', 'According', 'resisting', 'making', 'Taking', 'using', 'coming', 'starting', 'waiting', 'waiting', 'trying', 'turning', 'demonstrating', 'interpreting', 'speaking', 'taking', 'making', 'fainting', 'stressing', 'describing', 'Painting', 'producing', 'changing', 'producing', 'producing', 'painting', 'according', 'Referring', 'according', 'distinguishing', 'Referring', 'positioning', 'demonstrating', 'justifying', 'developing', 'relating', 'painting', 'painting', 'transforming', 'interpreting', 'being', 'grasping', 'describing', 'painting', 'painting', 'specialising'];


module.exports = VERBSVBG;
