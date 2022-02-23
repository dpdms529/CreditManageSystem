package kr.co.dao;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.vo.memberVO;

@Repository
public class memberDAOImpl implements memberDAO{
	
	@Inject
	private SqlSession sql;
	
	// �α���
	@Override
	public memberVO logIn(memberVO vo) throws Exception {
		return sql.selectOne("MemberMapper.login", vo);
	}
	
	// ȸ������
	@Override
	public void register(memberVO vo) throws Exception {
		sql.insert("MemberMapper.register", vo);
	}
}
