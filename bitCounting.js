let countBits = n => (n >>> 0).toString(2).split('').filter(zero => zero !== '0').length;
