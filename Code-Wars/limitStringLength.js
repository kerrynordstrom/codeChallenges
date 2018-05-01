function solution(string, limit) {
  return limit < string.length ? `${string.slice(0, limit)}...` : string;
}